const canvas = document.getElementById('renderSurface');

            const fluid = new Fluid(canvas);

            fluid.mapBehaviors({
                sim_resolution: 128,
                dye_resolution: 512,
                paused: false,
                clamp_values: true,
                embedded_dither: true,

                /* Fluid Dissipation Behaviors*/
                dissipation: 1,
                velocity: .98,
                pressure: .8,
                pressure_iteration: 20,


                /* Characteristics */
                curl: 0,
                emitter_size: 0.5,
                render_shaders: true,
                multi_color: true,

                /* Bloom */
                render_bloom: false,
                bloom_iterations: 8,
                bloom_resolution: 256,
                intensity: 0.8,
                threshold: 0.6,
                soft_knee: 0.7,

                background_color: { r: 244, g: 31, b: 107 },
                transparent: true
            });
            fluid.embedded_dither = true;
            fluid.setDitherURL('mask.png');
            fluid.activate();