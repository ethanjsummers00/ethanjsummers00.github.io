(function() {
    emailjs.init('XUQP6S1DetJtlcg-g');
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contactNumber.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_6pvcni8', 'template_iswybdf', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}