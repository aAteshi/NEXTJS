import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
      <h1>This is student page</h1>

      <div style={{ width: '200px', height: '200px', overflow: 'hidden', marginBottom: '10px' }}>
        <Image
          src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/457223491_498070926494219_1381565464774382192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6cpasz0TcXRlG8zlRBzvQ3oUT2vJ-SwDehRPa8n5LAMte-sDd1PCF_7T1nHAxwGBEZUV7g-2KYRADHj30WhbU&_nc_ohc=e_gv9a2oLKcQ7kNvgEi6u7S&_nc_ht=scontent.futh1-1.fna&oh=00_AYBPwhfjf_f3AyBeKX-KJteEM8QehsBmwnz5d1Io_D1mKA&oe=66D3F25E"
          alt="Student Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        </Image>
      </div>
      
      <div>
        <h2>ข้อมูลนักศึกษา</h2>
        <p><strong>ชื่อ:</strong> ถิรวัฒน์ โชติธนกิจไพศาล</p>
        <p><strong>รหัสนักศึกษา:</strong> 653450090-6</p>
        <p><strong>อีเมล:</strong> thirawat.c@kkumail.com</p>
        <p><strong>สาขาวิชา:</strong> วิทยาการคอมพิวเตอร์</p>
      </div>
    </div>
  );
}
