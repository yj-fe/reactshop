import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ccc;
`

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  width: 50%;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`

export default function CartItem({ item }) {
  return (
    <ItemWrapper>
      <ItemDetails>
        <div
          style={{ width: '80px', height: '80px', backgroundColor: '#ddd' }}
        />{' '}
        <div className="info">
          <span>{item.name}</span>
          <span>Size: {item.size}</span>
        </div>
      </ItemDetails>
      <QuantityControl>
        <button>
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button>
          <FaPlus />
        </button>
        <button>
          <FaTrash />
        </button>
      </QuantityControl>
    </ItemWrapper>
  )
}
