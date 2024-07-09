// arash-frontend/src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>صفحه اصلی</h1>
      <p>به صفحه اصلی خوش آمدید</p>
      <Link to="/admin">رفتن به پنل مدیریت</Link>
    </div>
  );
};

export default HomePage;
