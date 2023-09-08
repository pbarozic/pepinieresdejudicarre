import Image from "next/image";

function Livraisons() {
  return (
    
    <div className="my-14 h-screen w-screen ">

<div className='h-1/3 w-full relative'>
            <Image src="/images/banner-variete.jpg" alt="photo d'olivier au coucher de soleil zoomée sur les feuilles" layout='fill'
              objectFit='cover' />
      </div>

    <div className="h-full w-full mt-4 px-8 flex flex-col justify-between items-center pb-14">
    <h1> COMMANDE</h1>
             <hr className="w-1/12 bg-teal-950 h-2" />
           <p>Le fait de passer commande implique l'adhésion entière de l'acheteur aux conditions de ventes et aux prix figurant au catalogue de l'année. 
   
   Les prix pourront être modifiés sans préavis selon les conditions économiques.
   
   Toutefois, les prix des commandes fermes seront définitivement acquis.
   
   Les prix du présent catalogue s'entendent hors T.V.A.
           </p>
   
           <h1 className="mt-4"> ÉTIQUETAGE</h1>
             <hr className="w-1/12 bg-teal-950 h-2" />
            <p> Les prix s'entendent avec chromos variétaux (suivant disponibilité) et étiquettes prix-code (gencod).
   
   </p>
   
           <h1 className="mt-4"> LIVRAISON ET TRANSPORT</h1>
             <hr className="w-1/12 bg-teal-950 h-2" />
             <p> Les produits de pépinières sont considérés agréés au départ de l'expédition et voyagent au frais de l'acheteur à ses risques et périls, même s'ils sont expédiés franco.
   
   Toutes réclamations concernant une détérioration en cours de transport doivent être formulées auprès du transporteur dès réception. Tout refus se marchandises doit nous être notifié par lettre recommandée dans les trois jours suivant la livraison.
           </p>
   
           <h1 className="mt-4"> PAIEMENT</h1>
             <hr className="w-1/12 bg-teal-950 h-2" />
             <h2>Paiements uniquement en chèque ou espèces.</h2>
           <p>Nos factures sont payables nettes et sans escompte à 45 jours de la date d'émission de la facture. En cas de non règlement à l'échéance convenue, nos factures produiront intérêt de plein droit à partir de la date s'échéance et au taux commercial de 1.5% par mois, les frais de recouvrement sont à la charge du client.
   
   Conformément à la loi du 16 mai 1980, le vendeur maintient son droit propriété sur les végétaux vendus et ce jusqu'à paiement complet/
   
   ​
   
   Enlèvement sur place -3%.
   
   Toute commande enregistrée avec des quantités inférieures à 6 unités / variétés sera majorée de 10%
           </p>
           </div>
           </div>    

  );
}

export default Livraisons;
