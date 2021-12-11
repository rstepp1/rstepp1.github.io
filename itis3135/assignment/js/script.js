$(function() {
    $('.validity').validity({
        // selector: 'select',
        // ignore: 'select',
        messages: {
            missing: 'Missing Info',
            mismatch: 'Please Input Correct Data'
        }
    })
        .on('submit', function(e) {
            var $this = $(this),
                $btn = $this.find('[type="submit"]');
                $btn.button('loading');

            if (!$this.valid()) {
                e.preventDefault();
                $btn.button('reset');
            }
    });

    $('.validity2').validity()
        .on('submit', function(e) {
            var $this = $(this),
                $btn = $this.find('[type="submit"]');
                $btn.button('loading');

            if (!$this.valid()) {
                e.preventDefault();
                $btn.button('reset');
            }
    });
});
