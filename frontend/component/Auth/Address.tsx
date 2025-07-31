"use client"

import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { AuthContext } from "@/context/AuthContext";

interface AddressFormData {
  name: string;
  surname: string;
  address: string;
  city: string;
  district: string;
  postal_code: string;
  phone: string;
}

const Address: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { addAddress, address } = authContext;


  const [formData, setFormData] = useState<AddressFormData>({
    name: '',
    surname: '',
    address: '',
    city: '',
    district: '',
    postal_code: '',
    phone: ''
  });

  const [isEditing, setIsEditing] = useState<boolean>(!address);

  useEffect(() => {
    if (address) {
      setFormData({
        name: address.name || '',
        surname: address.surname || '',
        address: address.address || '',
        city: address.city || '',
        district: address.district || '',
        postal_code: address.postal_code || '',
        phone: address.phone || ''
      });
      setIsEditing(false);
    }
  }, [address]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addAddress(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Adres eklenirken hata oluştu:", error);
    }
  };

  return (
    <div className="Address">
      <h2>Adresim</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ad:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="surname">Soyad:</label>
          <input
            id="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="address">Adres:</label>
          <textarea
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="city">Şehir:</label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="district">İlçe:</label>
          <input
            id="district"
            type="text"
            value={formData.district}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="postal_code">Posta Kodu:</label>
          <input
            id="postal_code"
            type="text"
            value={formData.postal_code}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="phone">Telefon:</label>
          <input
            id="phone"
            type="tel"
            placeholder="+90 (123) 456 78 90"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br /><br />
          <button type="submit">{address ? 'Adres Güncelle' : 'Adres Ekle'}</button>
          {address && (
            <button type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: '10px' }}>
              İptal
            </button>
          )}
        </form>
      ) : (
        <div>
          <p>Ad: {formData.name}</p>
          <p>Soyad: {formData.surname}</p>
          <p>Adres: {formData.address}</p>
          <p>Şehir: {formData.city}</p>
          <p>İlçe: {formData.district}</p>
          <p>Posta Kodu: {formData.postal_code}</p>
          <p>Telefon: {formData.phone}</p>
          <button onClick={() => setIsEditing(true)}>Adres Düzenle</button>
        </div>
      )}
    </div>
  );
};

export default Address;