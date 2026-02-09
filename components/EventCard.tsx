interface Event {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
}

export function EventCard({ event }: { event: Event }) {
  const startDate = new Date(event.start);
  
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white rounded-lg p-3 min-w-[70px]">
          <span className="text-2xl font-bold">
            {startDate.getDate()}
          </span>
          <span className="text-sm uppercase">
            {startDate.toLocaleString('fi-FI', { month: 'short' })}
          </span>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {startDate.toLocaleString('fi-FI', { 
              weekday: 'long',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          {event.location && (
            <p className="text-gray-500 text-sm">{event.location}</p>
          )}
          {event.description && (
            <p className="text-gray-700 mt-3">{event.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}