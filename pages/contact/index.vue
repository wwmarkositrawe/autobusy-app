<template>
<div class="ct-pageWrapper" id="ct-js-wrapper">
    
<section class="company-heading intro-type" id="parallax-one">
   <div class="container">
      <div class="row product-title-info">
         <div class="col-md-12">
            <h1>
               Kontakt
            </h1>
         </div>
      </div>
   </div>
   <div class="parallax">
        <img src="~/assets/img/landscape.jpg">
   </div>  
</section>

<section class="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding" id="section">
   <div class="container text-center">
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
<section class="culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
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
            <div class="company-icons-white">
               <i class="fa fa-phone-square"></i>
               <p>
                  333 666 999
               </p>  
               <p class="company-icons-subtext hidden-xs">
                  Infolinia czynna w godzinach 06:00-22:00 
               </p>             
            </div>
         </div>
         <div class="col-xs-6 col-md-4">
            <div class="company-icons-white">
               <i class="fa fa-envelope-o"></i>
               <p>
                  <a href="mailto:biuro@xyz.pl">biuro@xyz.pl</a>
               </p>    
               <p class="company-icons-subtext hidden-xs">
                  Napisz do nas 
               </p>           
            </div>
         </div>
         <div class="col-xs-6 col-md-4">
            <div class="company-icons-white">
               <i class="fa fa-clock-o"></i>
               <p>
                  08:00 - 17:00
               </p>
               <p class="company-icons-subtext hidden-xs">
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
.separator-type, .title-type, .intro-type, .content-type .intro-type p {
    position: relative;
}
.intro-type .container {
    padding: 107px 0px 102px 0px !important;
}
#product-header-section, .intro-type .container {
    padding: 40px 15px 20px !important;
}


.parallax {
    background-attachment: inherit !important;
    background-repeat: repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    z-index: -10;
}
.company-heading h1 {
    margin-bottom: 40px;
    line-height: 80px;
    color: #fff;
    font-weight: 700 !important;
    text-align: center;
}
.seo-header, .product-header, .intro-type .container h1.white, .company-heading h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 100 !important;
    text-transform: capitalize;
    font-size: 65px;
    margin-bottom: 20px;
}



.red-border {
    width: 50%;
    border-bottom: 1px solid #d2282e;
    margin: 0 auto;
    height: 16px;
}
.company-sections p {
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
.ct-u-paddingBoth100 {
    padding: 100px 15px;
}
.culture-section {
    background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45));    
}
.company-sections, .careers-sections, .left-headquarter-section-img, .right-headquarter-section-img {
    text-align: center;    
}

.company-sections h2, .careers-sections h2, .perks-section h2 {
    font-weight: 800;
    font-size: 50px;
}
.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {
    font-family: 'proxima-nova', sans-serif;
}




img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
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






.culture-section {
  background-size: cover;
  color: #fff;
}


</style>