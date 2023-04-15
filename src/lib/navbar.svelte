<script>
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
</script>



<section>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      
      <div id="main">
        <div class="navy py-[-20px] mt-0 h-30" style="font-size:30px;cursor:pointer" on:click={openNav}>
            <div class="hamburger m-0 mt-4 p-0 "> &#9776; </div>
            <img class="logo m-0" src="https://www.linkpicture.com/q/Meal_Planner-removebg-preview_1.png" width="150" height="80">
        </div>
      </div>
</section>


<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2e000077;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding-left: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  /* background: black; */
}

@media screen and (max-height: 450px) {
  .sidenav a {font-size: 18px;}
}

.navy{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    /* background-color: rgba(224, 128, 128, 0.419); */
}

.hamburger{
  /* background-color: bisque; */
  height: 60px;
}

.logo{
  /* background-color: azure; */
  height: 100px
}
</style> 