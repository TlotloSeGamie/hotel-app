import './Admin.css';
import React, { useState } from 'react';
import Table from './Table';
import AdminForm from './AdminForm';
import Footer from '../Footer';

const Admin = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [currentIndex, setCurrentIndex] = useState(null); // index of the item being edited
  const [registrationDetails, setRegistrationDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const submit = (details) => {
    if (formMode === 'add') {
      setRegistrationDetails([...registrationDetails, details]);
    } else if (formMode === 'edit') {
      const updatedRegistrationDetails = [...registrationDetails];
      updatedRegistrationDetails[currentIndex] = details;
      setRegistrationDetails(updatedRegistrationDetails);
    }
    setFormOpen(false);
  };

  const handleEdit = (index) => {
    setCurrentIndex(index);
    setFormMode('edit');
    setFormOpen(true); // Open form when editing
  };

  const handleDelete = (index) => {
    const updatedRegistrationDetails = registrationDetails.filter((_, i) => i !== index);
    setRegistrationDetails(updatedRegistrationDetails);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDetails = registrationDetails.filter((details) =>
    details.names.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      
      {/* Table component is always visible */}
      <Table 
        registrationDetails={filteredDetails}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <button className='btn' onClick={() => {
        setFormMode('add');
        setFormOpen(true); // Open the form when 'Add' is clicked
      }}>Add</button>

      {/* Show form only if formOpen is true */}
      {formOpen && 
        <AdminForm 
          closeForm={() => {
            setFormOpen(false); 
            setCurrentIndex(null); // Reset form state
          }}
          onSubmit={submit}
          initialDetails={formMode === 'edit' ? registrationDetails[currentIndex] : null}
        />
      }
      <Footer />
    </div>
  );
}

export default Admin;
