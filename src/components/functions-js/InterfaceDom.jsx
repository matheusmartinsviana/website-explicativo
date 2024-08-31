<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Exemplo getElementById</title>
</head>

<body>
    <div id="identifierId">Texto original</div>
    <button onclick="changeText()">Alterar Texto</button>

    <script>
        function changeText() {
            var div = document.getElementById('identifierId');
            div.innerHTML = 'Texto alterado!';
        }
    </script>
</body>
</html>
