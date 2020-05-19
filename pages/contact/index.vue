<template>
<div class="pageWrapper">     
   <section class="heading intro">
      <div class="container">
         <div class="row">
            <div class="col-sm-12">
               <h1>
                  Kontakt
               </h1>
            </div>
         </div>
      </div>    
   </section>

   <section class="company ct-u-paddingBoth84" id="section">
      <div class="container">
         <h2>
            Przewozy autobusowe XYZ
         </h2>      
         <div class="col-md-12 col-md-offset-2">
            <div class="red-border">
               &nbsp;
            </div>
            <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">
               Codziennie jeździmy na trasie Lidzbark Warmiński - Olsztyn. Zapewniamy komfort podróży oraz szybki czas dojazdu. 
            </p>        
         </div>
      </div>
   </section>

   <section class="contact-info company ct-u-paddingBoth84">
      <div class="container">
         <div class="col-md-12 col-md-offset-2">         
            <p class="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">
                              Przewozy autobusowe XYZ<br>
                              ul. Leśna 76<br>
                              11-100 Lidzbark Warmiński
            </p>
         </div>
         <div class="row ct-u-paddingBoth20">
            <div class="col-xs-6 col-md-4">
               <div>
                  <i class="fa fa-phone-square"></i>
                  <p>
                     333 666 999
                  </p>  
                  <p>
                     Infolinia czynna w godzinach 06:00-22:00 
                  </p>             
               </div>
            </div>
            <div class="col-xs-6 col-md-4">
               <div>
                  <i class="fa fa-envelope-o"></i>
                  <p>
                     <a href="mailto:biuro@xyz.pl">biuro@xyz.pl</a>
                  </p>    
                  <p>
                     Napisz do nas 
                  </p>           
               </div>
            </div>
            <div class="col-xs-6 col-md-4">
               <div>
                  <i class="fa fa-clock-o"></i>
                  <p>
                     08:00 - 17:00
                  </p>
                  <p>
                     Godziny pracy naszego biura 
                  </p>
               </div>
            </div>
         </div>    
      </div>
   </section>
</div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

.intro .container {
    padding: 40px 15px 20px !important;
}

p {
   color: #fff;
}

.heading h1 {
    margin-bottom: 40px;
    line-height: 80px;
    color: #000000;
    font-weight: 700 !important;
    text-align: center;
    font-family: 'Raleway', sans-serif;   
    font-size: 65px;
    margin-bottom: 20px;
}

.red-border {
    width: 50%;
    border-bottom: 2px solid #d2282e;
    margin: 0 auto;
    height: 16px;
}

.company p {
    margin-top: 20px;
}

.ct-u-size22 {
    font-size: 22px;
}

.ct-u-fontWeight300 {
    font-weight: 300;
}

.marginTop40 {
    margin-top: 40px !important;
}

.ct-u-paddingBoth84 {
    padding: 84px 15px;
}

.contact-info {
    background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45));  
    background-size: cover;
    color: #fff;  
}

.company {
    text-align: center;    
}

.company h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 50px;
    color: #FFFAFA;
}

.fa {
  font-size: 42px;
}

a {
   color:#b4dbe7;
}

a:hover, a:focus {
    color:#307e96;
}


</style>