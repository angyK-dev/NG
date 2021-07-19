<?php

$message_sent = false;

if (isset($_POST['nom']) && $_POST['nom'] != "" && isset($_POST['email']) && $_POST['email'] != "" && isset($_POST['sujet']) && $_POST['sujet'] != "" && isset($_POST['message']) && $_POST['message'] != "") {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

        // collecting form data posted...
        $userName = $_POST['prenoms'] . " " . $_POST['nom'];
        $userEmail = $_POST['email'];
        $messageSubject = $_POST['sujet'];
        $message = $_POST['message'];

        $to = "infos@novatic-group.com";
        $body = "";

        // structuring data...
        $body .= "De: " . $userName . "\r\n";
        $body .= "Email: " . $userEmail . "\r\n";
        $body .= "Sujet: " . $messageSubject . "\r\n";
        $body .= "Message: " . $message . "\r\n";

        // eamiling data...
        mail($to, $messageSubject, $body);

        // changing the state of message sent variable...
        $message_sent = true;
    }
}

?>

<section id="contact" class="full-height content">
    <input type="hidden" name="isOK" id="is-ok" value="true">
    <div class="container">

        <?php if ($message_sent) : ?>

            <h2 class="text-center text-info">Merci de nous avoir contacter. <br>Nous vous reviendrons très prochainement.</h2>
            <div class="d-flex justify-content-center">
                <a id="mailnova" href="/" data-toggle="tooltip" data-placement="bottom" title="Cliquez ici pour retourner à la page d'accueil">Retour</a>
            </div>

        <?php else : ?>

            <h2 class="text-center title-orange font-weight-bold my-5">NOUS CONTACTER</h2>
            <div class="row">
                <div class="col-md col-lg-6 mx-auto">
                    <p class="text-center">
                        Vous avez des préoccupations, voulez prendre attache avec l’un de nos services, ou tout
                        simplement
                        avoir une information. <br>
                        Prenez directement contact avec nous
                    </p>
                </div>
            </div>
            <form action="index.php?page=public/contact" method="POST">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="formNom">Nom*</label>
                        <input type="text" class="form-control form-control-lg" id="formNom" placeholder="Nom" name="nom" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="formPrenoms">Prénoms*</label>
                        <input type="text" class="form-control form-control-lg" id="formPrenoms" placeholder="Prénoms" name="prenoms">
                    </div>
                </div>
                <div class="form-group">
                    <label for="formEmail">Email*</label>
                    <input type="email" class="form-control form-control-lg" id="formEmail" placeholder="Email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="formSujet">Sujet</label>
                    <input type="text" class="form-control form-control-lg" id="formSujet" placeholder="Sujet" name="sujet" required>
                </div>
                <div class="form-group">
                    <label for="formMsg">Message*</label>
                    <textarea class="form-control form-control-lg" id="formMsg" rows="3" name="message"></textarea>
                </div>
                <div class="row">
                    <div class="col col-md-6 col-lg-4 mx-auto">
                        <button id="btncontact" type="submit" class="btn btn-block btn-primary" required>Envoyer</button>
                    </div>
                </div>
            </form>

        <?php endif; ?>
        
    </div>
</section>