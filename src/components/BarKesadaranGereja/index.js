import React from 'react';
import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['Rencana kesiapsiagaan', 'Rencana tanggap darurat', 'Petugas evakuasi', 'Komisi tanggap darurat bencana ', 'Pernah mengikuti simulasi evakuasi', 'program atau rencana kegiatan menghadapi bencana. ', 'kemampuan penanganan', 'Agenda pendataan rutin', 'Regulasi/SOP respon bencana'],
  datasets: [
    {
      label: 'Kesadaran Gereja terhadap bencana (dalam persen)',
      data: [36, 27, 23, 19, 25, 14, 55, 48, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(95, 186, 0, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(95, 186, 0, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const BarKesadaranGereja = () => (
  <>
    <p>Kesadaran Gereja terhadap bencana</p>
    <Bar data={data} />
  </>
);

export default BarKesadaranGereja;