import React from "react";

export const Transaction = ({ transactions }) => {
    return (
      <tr>
        <td>{transactions.id}</td>
        <td>{transactions.text}</td>
        <td>{transactions.timezone}</td>
        <td>{transactions.status}</td>
        <td>{transactions.date}</td>
        <td>{transactions.city}</td>
        <td>{transactions.country}</td>
        <td>{transactions.transport}</td>
        <td>{transactions.currency}</td>
        <td>{transactions.price}</td>
        <td>{transactions.quantity}</td>
        <td>{transactions.fname}</td>
        <td>{transactions.lname}</td>
        <td>{transactions.email}</td>
        <td>{transactions.verification}</td>
        <td>{transactions.platform}</td>
        <td>{transactions.security}</td>
        <td>{transactions.contact}</td>
        <td>{transactions.approval}</td>
        <td>{transactions.delivered}</td>
      </tr>
    );
  };