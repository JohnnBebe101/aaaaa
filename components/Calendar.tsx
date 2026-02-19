
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onRangeSelect: (start: Date | null, end: Date | null) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ startDate, endDate, onRangeSelect }) => {
  const [viewDate, setViewDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === viewDate.getMonth() && today.getFullYear() === viewDate.getFullYear();
  };

  const isSelected = (day: number) => {
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return (startDate && d.getTime() === startDate.getTime()) || (endDate && d.getTime() === endDate.getTime());
  };

  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return d > startDate && d < endDate;
  };

  const isPast = (day: number) => {
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    
    if (!startDate || (startDate && endDate)) {
      onRangeSelect(clickedDate, null);
    } else if (startDate && !endDate) {
      if (clickedDate < startDate) {
        onRangeSelect(clickedDate, null);
      } else if (clickedDate.getTime() === startDate.getTime()) {
        onRangeSelect(null, null);
      } else {
        onRangeSelect(startDate, clickedDate);
      }
    }
  };

  const monthName = viewDate.toLocaleString('default', { month: 'long' });
  const year = viewDate.getFullYear();
  const totalDays = daysInMonth(year, viewDate.getMonth());
  const padding = startDayOfMonth(year, viewDate.getMonth());

  return (
    <div className="bg-white border border-forest/5 p-6 select-none">
      <div className="flex items-center justify-between mb-8">
        <h3 className="serif text-xl text-forest">{monthName} <span className="text-cactus/40">{year}</span></h3>
        <div className="flex space-x-2">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-sandstone transition-colors text-forest">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={handleNextMonth} className="p-2 hover:bg-sandstone transition-colors text-forest">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <div key={d} className="text-center text-[9px] uppercase font-bold text-gray-400 py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: padding }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;
          const past = isPast(day);
          const selected = isSelected(day);
          const inRange = isInRange(day);

          return (
            <div
              key={day}
              onClick={() => !past && handleDayClick(day)}
              className={`
                relative h-10 flex items-center justify-center cursor-pointer text-xs transition-all
                ${past ? 'text-gray-200 cursor-default' : 'text-forest hover:bg-cactus/5'}
                ${inRange ? 'bg-cactus/10' : ''}
                ${selected ? 'bg-cactus text-sandstone font-bold rounded-full z-10' : ''}
              `}
            >
              {day}
              {isToday(day) && !selected && (
                <div className="absolute bottom-1 w-1 h-1 bg-cactus rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
