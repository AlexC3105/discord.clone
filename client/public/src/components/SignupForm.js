import React, { useState } from 'react';
import { createUser } from '../services/api';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(username, email, password);
      console.log(response);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
