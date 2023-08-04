const dataAniversario = new Date("Nov, 19 2023 10:00:00");
const timeStampAniversario = dataAniversario.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampAniversario - timeStampAtual;

    const dias = 1000 * 60 * 60 * 24;
    const horas = 1000 * 60 * 60;
    const minutos = 1000 * 60;

    const diasAteAniversario = Math.floor(tempoAteEvento / dias);
    const horasAteAniversario = Math.floor((tempoAteEvento % dias) / horas);
    const minutosAteAniversario = Math.floor((tempoAteEvento % horas) / minutos);
    const segundosAteAniversario = Math.floor((tempoAteEvento % minutos) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`;

    if (diasAteAniversario < 0) {
        clearInterval(contaHoras);
        document.getElementById('mensagem').innerHTML = 'Feliz Aniversário!';
    }
}, 1000);