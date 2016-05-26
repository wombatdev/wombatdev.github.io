
$('#about').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text("I'm replaced!");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);
