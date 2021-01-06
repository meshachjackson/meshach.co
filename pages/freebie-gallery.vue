// https://tutorialzine.com/2017/02/freebie-4-bootstrap-galleries

<template>
  <div class="container gallery-container">
    <h1>Bootstrap 3 Gallery</h1>

    <p class="page-description text-center">Fluid Layout With Overlay Effect</p>

    <div class="tz-gallery">
      <b-row>
        <b-col class="col-sm-12 col-md-4">
          <a v-b-modal.modal-center>
            <img src="/freebie/images/bridge.jpg" alt="Bridge" />
          </a>
        </b-col>
        <b-col class="col-sm-6 col-md-4">
          <img src="/freebie/images/park.jpg" alt="Park" />
        </b-col>
        <b-col class="col-sm-6 col-md-4">
          <img src="/freebie/images/tunnel.jpg" alt="Tunnel" />
        </b-col>
        <b-col class="col-sm-12 col-md-8">
          <img src="/freebie/images/traffic.jpg" alt="Traffic" />
        </b-col>
        <b-col class="col-sm-6 col-md-4">
          <img src="/freebie/images/coast.jpg" alt="Coast" />
        </b-col>
        <b-col class="col-sm-6 col-md-4">
          <img src="/freebie/images/rails.jpg" alt="Rails" />
        </b-col>
      </b-row>
    </div>

    <b-modal
      id="modal-center"
      centered
      lazy
      title="Image"
      hide-footer
      hide-header
      hide-header-close
      no-stacking
      fluid
    >
      <img src="/freebie/images/bridge.jpg" alt="Bridge" />
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #434c50;
  min-height: 100vh;
  font: normal 16px sans-serif;
  padding: 40px 0;
}

.container.gallery-container {
  background-color: #fff;
  color: #35373a;
  min-height: 100vh;
  padding: 30px 50px;
}

.gallery-container h1 {
  text-align: center;
  margin-top: 50px;
  font-family: "Droid Sans", sans-serif;
  font-weight: bold;
}

.gallery-container p.page-description {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  color: #999;
}

.tz-gallery {
  padding: 40px;
}

/* Override bootstrap column paddings */
.tz-gallery .row > div {
  padding: 2px;
}

.tz-gallery .lightbox img {
  width: 100%;
  border-radius: 0;
  position: relative;
}

.tz-gallery .lightbox:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  opacity: 0;
  color: #fff;
  font-size: 26px;
  font-family: "Glyphicons Halflings";
  content: "\e003";
  pointer-events: none;
  z-index: 9000;
  transition: 0.4s;
}

.tz-gallery .lightbox:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(46, 132, 206, 0.7);
  content: "";
  transition: 0.4s;
}

.tz-gallery .lightbox:hover:after,
.tz-gallery .lightbox:hover:before {
  opacity: 1;
}

.baguetteBox-button {
  background-color: transparent !important;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }
}
</style>
