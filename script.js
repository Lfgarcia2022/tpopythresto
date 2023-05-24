function initMap(){
    var coord = {lat: 22.7589543 ,lng: 75.8888323};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord,
      zoomControl: false,
      scaleControl: false
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}