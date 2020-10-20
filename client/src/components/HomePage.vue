<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item>
        <v-img contain 
        src="@/assets/about.jpg" 
        gradient="to bottom, rgba(2,44,2,0.955) 34%, rgba(5,66,4,0.947) 78%, rgba(160,131,0,1) 100%"
        > 
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div align="center">
              <p class="display-3">
                Career Development Center
              </p>
              <p class="display-1">
                #CBIT
              </p>
            </div>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <h1>Home Page</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({})
};
</script>
