var config = {
    style: 'mapbox://styles/gabieale13/cl6wjwex3002p14o8mut6fk5k',
    accessToken: 'pk.eyJ1IjoiZ2FiaWVhbGUxMyIsImEiOiJjbDVvN2I1MzUwOWdvM2NvN3cydzZxcjZoIn0.1ytIqrGLVQMZxll_T5RN9w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'lambertConformalConic',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    footer: 'Data: Agroecological organizations. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'entrada',
            alignment: 'left',
            hidden: false,
            title: 'Coralys Márquez',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-66.85163, 18.29060],
                zoom: 17,
                pitch: 20.00,
                bearing: 164.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
                { layer: 'region_metro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_east',
                opacity: 0,
                duration: 1000
                },
            ]
        },
        // {
        //     id: 'parte-2',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'We see zona montañosa',
        //     image: 'screenshot.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //     center: [-66.65363, 18.10949],
        //     zoom: 15.11,
        //     pitch: 90.00,
        //     bearing: 0.00,
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: true,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'parte-3',
            alignment: 'left',
            hidden: false,
            title: 'Entire archipelago with all farms',
            image: 'mon.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-66.51191, 18.38216],
                zoom: 8.35,
                pitch: 20.00,
                bearing: 6.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: .6, // make the flying slow
                curve: 3, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'puntos-fincas',
                opacity: 1,
                duration: 20000
                },
            ],
            onChapterExit: [
                { layer: 'region_metro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_east',
                opacity: 0,
                duration: 1000
                },]
        },
        {
            id: 'parte-4',
            alignment: 'right',
            hidden: false,
            title: 'All regions appear but region_central',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-66.30314, 18.37376],
                zoom: 8.44,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.9,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'region_metro',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 1000
                },
            ],
            onChapterExit: [


            ]
        },
        {
            id: 'parte-5',
            alignment: 'right',
            hidden: false,
            title: 'All regions appear but region_oeste',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-66.30314, 18.37376],
                zoom: 8.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'region_metro',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 1,
                duration:1000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 1000
                },
            ],
            onChapterExit: [
                { layer: 'region_metro',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_centro',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 2000
                },

            ]
        },
        {
            id: 'parte-6',
            alignment: 'right',
            hidden: false,
            title: 'Salen todas las regiones y agunas bolitas se pintan de verde. FALTA duplicar layer en mapbox y escoger la cantidad de bolitas y crear anotaciones en el mapa con el número de bolitas que corresponde a cada categoría.',
            image: 'edu.jpg',
            description: 'Graph: Gabriela Alexandra Carrasquillo Piñeiro',
            location: {
                center: [-66.04154, 18.38091],
                zoom: 8.05,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.9   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'region_metro',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region-north',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_south',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_east',
                opacity: 0,
                duration: 2000
                },
            ],
            onChapterExit: [


            ]
        },
        
    ]
};
