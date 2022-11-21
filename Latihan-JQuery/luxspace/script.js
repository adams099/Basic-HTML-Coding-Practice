$(document).ready(function(){ 
    // alert text ketika input email
    $("#form-email").submit(function(e){    
        e.preventDefault();

        // input email masuk ke text alert
        const email = $("#input-email", this).val();
        $("#text-alert").html("terima kasih <b>" + email + "</b>, link sudah dapat dilihat di email anda.");

        // alert text tampil
        $("#divAlert").removeClass("d-none");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });

    // close text alert
    $("#btnClose").click(function(){
        $("#divAlert").addClass("d-none");
    });
    // end alert text


    // ganti gambar conten yang dipilih
    $("#imgContent img").click(function() {
        const imgSrc = $(this).attr("src");
        $("#imgParent").attr("src", imgSrc);
        $("#imgParent").css("height", "400");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    // end ganti gambar


    $("#form-checkout").submit(function(e) {
        e.preventDefault();
        // hiden form
        $(this).addClass("d-none");
        
        // value
        const firstName = $("#first-name", this).val();
        const lastName = $("#last-name", this).val();
        const name = firstName + " " + lastName;
        const address = $("#inputAddress", this).val();

        // kirim vllue
        $("#nama").html("Terima Kasih, " + name);
        $("#address").html("Paket akan dikirim ke " + address);
        

        // show msg
        $("#msg").removeClass("d-none");

        window.scrollTo(0,0)

    })

});