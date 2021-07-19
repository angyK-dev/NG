<?php

$message_sent = false;

if (((isset($_POST['raison-sociale']) && $_POST['raison-sociale'] != "") || (isset($_POST['nom']) && $_POST['nom'] != "")) && isset($_POST['email']) && $_POST['email'] != "" && isset($_POST['commentaire']) && $_POST['commentaire'] != "") {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        
        // collecting form data posted...
        $userName = (isset($_POST['raison-sociale'])) ? $_POST['raison-sociale'] : $_POST['prenoms'] . " " . $_POST['nom'];
        $userEmail = $_POST['email'];
        $commentaire = $_POST['commentaire'];

        $service = $_POST['service'];
        switch ($service) {
            case 'dg':
                $to = "constant.dago@novatic-group.com";
                break;
            
            // case 'marketing':
            //     $to = "infos@novatic-group.com";
            //     break;
            
            // case 'rh':
            //     $to = "infos@novatic-group.com";
            //     break;
            
            default:
                $to = "infos@novatic-group.com";
                break;
        }

        // structuring data...
        $body = "";

        $body .= "De: " . $userName . "\r\n";
        $body .= "Email: " . $userEmail . "\r\n";
        $body .= "Commentaire: " . $commentaire . "\r\n";

        // eamiling data...
        mail($to, $messageSubject, $body);
        
        // changing the state of message sent variable...
        $message_sent = true;
    }
}

?>

<section id="espaceclient" class="full-height content">
    <input type="hidden" name="isOK" id="is-ok" value="true">
    <div class="container">

        <?php if ($message_sent) : ?>

            <h2 class="text-center text-info">Merci de nous avoir contacter. <br>Nous vous reviendrons très prochainement.</h2>
            <div class="d-flex justify-content-center">
                <a id="mailnova" href="/" data-toggle="tooltip" data-placement="bottom" title="Cliquez ici pour retourner à la page d'accueil">Retour</a>
            </div>

        <?php else : ?>

            <h2 class="text-center title-orange font-weight-bold my-5">ESPACE CLIENT</h2>
            <div class="card mb-5">
                <div class="card-body">
                    <h3 class="card-title">Entrez en contact avec...</h3>
                    <h6 class="card-subtitle mb-2 text-muted">Veuillez sélectionner une option</h6>
                    <p class="card-text">
                    <div class="row">
                        <div class="col">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="rdodg" name="rdoservices" value="dg" class="custom-control-input">
                                <label class="custom-control-label" for="rdodg">Direction Générale</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="rdomktcom" name="rdoservices" value="marketing" class="custom-control-input">
                                <label class="custom-control-label" for="rdomktcom">Service Marketing & Communication</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="rdodrh" name="rdoservices" value="rh" class="custom-control-input">
                                <label class="custom-control-label" for="rdodrh">Direction des Ressources Humaines</label>
                            </div>
                        </div>
                    </div>
                    </p>
                </div>
            </div>

            <div id="client" class="unactive">
                <h3 class="card-title">Vous êtes...</h3>
                <div class="row">
                    <div class="col-12 col-md">
                        <div class="custom-control custom-radio custom-control-inline mb-3">
                            <input type="radio" value="entreprise" id="rdoent" name="rdostatut" class="custom-control-input">
                            <label class="custom-control-label" for="rdoent">Une Entreprise</label>
                        </div>

                        <form id="frm-entreprise" class="mb-5 unactive" action="index.php?page=public/espace-client" method="POST">
                            <input type="hidden" name="service" class="service" value="">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="formRaisonSoc">Raison Sociale*</label>
                                    <input type="text" class="form-control form-control-lg" id="formRaisonSoc" name="raison-sociale" placeholder="Raison Sociale">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="formEmail">Email*</label>
                                <input type="email" class="form-control form-control-lg" id="formEmail" placeholder="Email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="com-entr">Commentaire</label>
                                <textarea class="form-control form-control-lg" id="com-entr" name="commentaire" rows="3"></textarea>
                            </div>
                            <div class="row">
                                <div class="col col-md-6 mx-auto">
                                    <button type="submit" class="btn btn-block btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md">
                        <div class="custom-control custom-radio custom-control-inline mb-3">
                            <input type="radio" value="particulier" id="rdopart" name="rdostatut" class="custom-control-input">
                            <label class="custom-control-label" for="rdopart">Un Particulier</label>
                        </div>

                        <form id="frm-particulier" class="mb-5 unactive" action="index.php?page=public/espace-client" method="POST">
                            <input type="hidden" name="service" class="service" value="">
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <label for="formNom">Nom</label>
                                    <input type="text" class="form-control form-control-lg" id="formNom" name="nom" placeholder="Nom">
                                </div>
                                <div class="form-group col-6">
                                    <label for="formPrenoms">Prénoms</label>
                                    <input type="text" class="form-control form-control-lg" id="formPrenoms" name="prenoms" placeholder="Prénoms">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="formEmailPart">Email*</label>
                                <input type="email" class="form-control form-control-lg" id="formEmailPart" placeholder="Email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="com-part">Commentaire</label>
                                <textarea class="form-control form-control-lg" id="com-part" name="commentaire" rows="3"></textarea>
                            </div>
                            <div class="row">
                                <div class="col col-md-6 mx-auto">
                                    <button type="submit" class="btn btn-block btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        <?php endif; ?>

    </div>
</section>