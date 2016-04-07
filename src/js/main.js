var counters = document.getElementsByClassName("counter");
for (i = 0; i < counters.length; i++) {

    new ProgressBar.SemiCircle(counters[i], {
        color: counters[i].dataset.color,
        strokeWidth: 3,
        trailWidth: 1,
        duration: 1500,
        text: {
            value: counters[i].dataset.value + '%'
        },
        step: function(state, bar) {
            bar.setText((bar.value() * 100).toFixed(0) + '%');
        }
    }).animate( ((counters[i].dataset.value * 100) / document.getElementById('total').value) / 100 );

}
