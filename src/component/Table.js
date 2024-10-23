import React from 'react';

const rideHistoryData = [
  { trackingId: '#00321TYNSv', arrivalTime: '02/10/2024', fare: '₦4,000', route: '20,ASADAM - ILORIN MALL', status: 'Completed', rating: 4},
  { trackingId: '#75801KSTOP', arrivalTime: '04/10/2024', fare: '₦3,500', route: '20,Taiwo road - Kunlende Market', status: 'Cancelled', rating: 0},
  { trackingId: '#08564AYTOLD', arrivalTime: '07/10/2024', fare: '₦6,000', route: 'Polygate - Tanke Oke odo', status: 'Completed', rating: 5 },
  { trackingId: '#043280OLPJQ', arrivalTime: '12/10/2024', fare: '₦5,000', route: 'Post office - Sobi Rock', status: 'Completed', rating: 4 },
];

const Table = () => {
  return (
    <div>
      {/* <h2>Ride History</h2> */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tracking ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Arrival Time</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Fare</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Route</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {rideHistoryData.map((ride, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{ride.trackingId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{ride.arrivalTime}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{ride.fare}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{ride.route}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{ride.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{'★'.repeat(ride.rating)}{'☆'.repeat(5 - ride.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
