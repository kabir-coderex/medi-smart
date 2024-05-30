import React, { useContext, useState } from 'react';
import { Tab } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { PrescriptionContext } from './context/PrescriptionContext';
import Monitor from './components/Monitor';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dashboard = () => {
  const { prescriptions } = useContext(PrescriptionContext);
  const [monitorModalOpen, setMonitorModalOpen] = useState(false);
  const navigate = useNavigate();

  const getMedicineStatusColor = (daysLeft) => {
    if (daysLeft <= 2) return 'text-red-500';
    if (daysLeft === 3) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-blue-900/20 p-1">
            <Tab as="button" className={({ selected }) =>
              classNames('w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )}>
              Patient
            </Tab>
            <Tab as="button" className={({ selected }) =>
              classNames('w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )}>
              Monitor
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div>
                <h2 className="text-2xl font-bold mb-4">Medicine Guide of Mine</h2>
                <table className="table w-full bg-white shadow-lg rounded-lg">
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Course Time</th>
                      <th>Medicine Left</th>
                      <th>Medicine Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptions.map((prescription, index) => (
                      <tr key={index} className={getMedicineStatusColor(prescription.left)}>
                        <td>{prescription.name}</td>
                        <td>{prescription.courseTime}</td>
                        <td>{prescription.left}</td>
                        <td>{prescription.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 space-x-4">
                  <Link to="/create-prescription" className="btn btn-primary">Create Prescription</Link>
                  <Link to="/set-inventory" className="btn btn-secondary">Set Inventory</Link>
                  <button className="btn btn-secondary" onClick={() => setMonitorModalOpen(true)}>Set Monitor</button>
                </div>
                <div className="emmergency"><p>EMERGENCY</p></div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <Monitor />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      {monitorModalOpen && (
        <MonitorModal setMonitorModalOpen={setMonitorModalOpen} />
      )}
    </div>
  );
};

const MonitorModal = ({ setMonitorModalOpen }) => {
  const users = ['User A', 'User B', 'User C'];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Set Monitor</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index} className="p-2 hover:bg-gray-200">{user}</li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="btn btn-primary mr-2">Save</button>
          <button className="btn btn-secondary" onClick={() => setMonitorModalOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
