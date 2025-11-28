      function convertirTemperatura() {
            const celsiusInput = document.getElementById('celsius');
            const celsius = parseFloat(celsiusInput.value);
            
            if (isNaN(celsius)) {
                alert("Por favor, ingresa un valor numérico válido.");
                return;
            }
            
            const fahrenheit = (celsius * 9/5) + 32;
            
            let estado = "";
            let claseEstado = "";
            
            if (celsius < 0) {
                estado = "SÓLIDO (Hielo)";
                claseEstado = "solid";
            } else if (celsius >= 0 && celsius < 100) {
                estado = "LÍQUIDO (Agua)";
                claseEstado = "liquid";
            } else {
                estado = "GASEOSO (Vapor)";
                claseEstado = "gas";
            }
            
            const resultDiv = document.getElementById('result');
            const temperatureResult = document.getElementById('temperatureResult');
            const stateResult = document.getElementById('stateResult');
            
            temperatureResult.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
            stateResult.textContent = `Estado del agua: ${estado}`;
            
            resultDiv.className = `result ${claseEstado}`;
            resultDiv.style.display = 'block';
        }
        
        document.getElementById('celsius').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                convertirTemperatura();
            }
        });