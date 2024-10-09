import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes, FaTrash } from 'react-icons/fa';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const NotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: ${props => props.theme.card};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const NotificationList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const NotificationItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.border};
  &:last-child {
    border-bottom: none;
  }
`;

const EmptyNotification = styled.div`
  text-align: center;
  color: ${props => props.theme.textSecondary};
  padding: 20px;
`;

function NotificationCenter({ notifications = [], onClose, onClear }) {
  return (
    <NotificationWrapper>
      <NotificationHeader>
        <h3>Notifications</h3>
        <div>
          <HeaderButton onClick={onClear} title="Clear all notifications">
            <FaTrash />
          </HeaderButton>
          <HeaderButton onClick={onClose} title="Close">
            <FaTimes />
          </HeaderButton>
        </div>
      </NotificationHeader>
      <NotificationList>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <NotificationItem key={notification.id}>
              {notification.message}
            </NotificationItem>
          ))
        ) : (
          <EmptyNotification>No new notifications</EmptyNotification>
        )}
      </NotificationList>
    </NotificationWrapper>
  );
}

export default NotificationCenter;