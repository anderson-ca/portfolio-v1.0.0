import styles from '../styles/Canvas.module.css';
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

import React from 'react'

const Canvas = () => {
    const [canvas, setCanvas] = useState(null);
    const [scene, setscene] = useState(null);
    const [camera, setCamera] = useState(null);
    const [light, setlight] = useState(null);
    const [canvasHeight, setHeight] = useState(null);
    const [canvasWidth, setWidth] = useState(null);

    useEffect(() => {
        console.log("initilize values...");
        console.log("-> ", document);
        console.log('--> ', document.querySelector('canvas'));
        console.log('width/height ---> ', window.innerWidth, window.innerHeight);
        
    }, []);

    return (
        <canvas>Canvas</canvas>
    )
}

export default Canvas