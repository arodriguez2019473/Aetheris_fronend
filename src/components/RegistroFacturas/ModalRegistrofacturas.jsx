import React from "react";
import Modal from "react-modal";
import "./ModalRegistroFacturas.css";
import { useNavigate } from "react-router-dom";
import { eliminarFactura,getFacturas } from "../../api/facturaApi";


const ModalRegistroFacturas = ({ isOpen, onRequestClose, factura, setFacturas }) => {
  const navigate = useNavigate();

  const handleEliminar = async () => {
    if (window.confirm(`¿Eliminar la factura ${factura.nombre_factura}?`)) {
      await eliminarFactura(factura.idFactura);
      const updatedFacturas = await getFacturas();
      setFacturas(updatedFacturas);
      onRequestClose();
    }
  };

  return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className="modal-factura"
          overlayClassName="overlay"
          closeTimeoutMS={300}
        >
      <h2>Detalles de la Factura</h2>
      <p><strong>Nombre:</strong> {factura.nombre_factura}</p>
      <p><strong>Fecha:</strong> {factura.fecha_factura}</p>
      <p><strong>Tipo:</strong> {factura.tipo_factura}</p>
      <p><strong>Total:</strong> Q{factura.totalFactura}</p>
      <p><strong>envio:</strong>{factura.envio}</p>
      <p><strong>metodo de pago:</strong>{factura.metodo_pago}</p>
      <p><strong>Estado:</strong> {factura.estado}</p>
      <p><strong>vendedor:</strong>{factura.vendedor}</p>
      <p><strong>Cantidad producto:</strong>{factura.cantidad_producto}</p>
      <p><strong>Precio producto:</strong>{factura.precio_producto}</p>
      <p><strong>id factura</strong>{factura.id_factura}</p>
      <p><strong>Dirección:</strong> {factura.direccion_factura}</p>

      <div className="botones-modal">
        <button className="elegant-bttn" onClick={() => navigate(`/editar/${factura.id_factura}`)}>
          Editar
        </button>
        <button className="eliminar-bttn" onClick={handleEliminar}>
          Eliminar
        </button>
        <button className="elegant-bttn" onClick={onRequestClose}>
          Cerrar
        </button>
      </div>
    </Modal>
  );
}
export default ModalRegistroFacturas;