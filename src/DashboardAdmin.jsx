import { useState } from 'react';

const AdminDashboard = () => {
  const [dataset] = useState([
    { id: 1, word: "koding", category: "Teknik Informatika" },
    { id: 2, word: "algoritma", category: "Teknik Informatika" },
    { id: 3, word: "mengajar", category: "PGSD" },
    { id: 4, word: "pasal", category: "Hukum" },
  ]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-green-50 text-[#109060] rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            Mode Administrator Aktif
          </span>
          <h2 className="text-2xl font-bold text-gray-950">Manajemen Dataset</h2>
          <p className="text-sm text-gray-500 mt-1">Kelola kamus kata kunci latih untuk akurasi rekomendasi fakultas.</p>
        </div>
        
        <button className="px-4 py-2 bg-[#109060] hover:bg-[#0c704a] text-white rounded-lg text-sm font-semibold shadow-sm transition-all duration-200 shrink-0">
          + Tambah Kata Baru
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-sm text-gray-600 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-center border-r border-gray-200 w-20">No</th>
              <th scope="col" className="px-6 py-4 font-bold text-center border-r border-gray-200">Kata Kunci (Word)</th>
              <th scope="col" className="px-6 py-4 font-bold text-center border-r border-gray-200">Kategori Fakultas</th>
              <th scope="col" className="px-6 py-4 font-bold text-center w-32">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {dataset.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="px-6 py-3.5 text-center font-medium text-gray-400 border-r border-gray-200">{index + 1}</td>
                <td className="px-6 py-3.5 text-center font-semibold text-gray-800 border-r border-gray-200">{item.word}</td>
                <td className="px-6 py-3.5 text-center border-r border-gray-200">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-center">
                  <button className="text-sm text-red-600 hover:text-red-800 font-semibold transition-colors">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;