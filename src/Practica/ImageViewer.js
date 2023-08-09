import React from 'react'

function ImageViewer(props) {
    return (
        <div className="image-viewer">
          <div className="modal">
            <img src={props.imageUrl} alt="Imagen en tamaño completo" />
            <button onClick={props.onClose}>Cerrar</button>
          </div>
        </div>
      );
}

export default ImageViewer