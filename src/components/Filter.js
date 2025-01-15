const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between mb-6">
      {[
        { label: 'All', value: 'all' },
        { label: 'Completed', value: 'completed' },
        { label: 'Pending', value: 'pending' },
      ].map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            filter === f.value
              ? 'bg-purple-700 text-white'
              : 'bg-white text-purple-700 hover:bg-purple-200'
          } transition duration-200`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;