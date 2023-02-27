import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';


export const Funcionalidades = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:3001/funcionalidades');
            const data = await response.json();
            setItems(data);
          }
          fetchItems();
    }, []);

    return (
        <section className="skill" id="skills" style={{ height: '900px' }}>
            <div className="container" style={{ height: '500px' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn bg-dark" style={{ height: '720px', marginTop: '100px' }}>
                            <h2>Funcionalidades</h2>
                            <p>Abaixo uma lista das aplicabilidades possíveis com a nossa plataforma.</p>
                            <ul>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}