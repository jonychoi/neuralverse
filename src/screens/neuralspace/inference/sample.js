
    var len_inputs = 2;
    var len_outputs = 1;

    var url = window.location.href;
    const stripTrailingSlash = (str) => {
    return str.endsWith('/') ?
        str.slice(0, -1) :
        str;
    };
    url = stripTrailingSlash(url);
    var api_url = url + '/predict'
    var interface_url = url.replace(/(api$)/, '')
    $('#api_url').html(api_url);
    $('#py_syntax_url').html(api_url);
    $('#curl_syntax_url').html(api_url);
    $('#js_syntax_url').html(api_url);

    $('#stripped_url').html(interface_url);
    $('#go-to-interface-url').attr('href', interface_url);

    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
      $('#copy-button').html("COPIED!");
      setTimeout(() => { $('#copy-button').html("COPY"); }, 1500);
    }



    function postRequest() {
      var sample_inputs = ["data:image/png;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==", "version 0.2"]
      let data = { "data": sample_inputs };
      fetch(api_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }).then(function (response) {
        if (response.status == 200) {
          $('#post_response').removeClass("hidden");
          $('#response_status').addClass("highlight-green");
          $('#response_status').removeClass("highlight-red");
          $('#response_text').addClass("highlight-green");
          $('#response_text').removeClass("highlight-red");
          $('#response_status').html(response.status);
          $('#response_text').html(friendlyHttpStatus[response.status]);
          return response.json();
        }
        else {
          $('#post_response').addClass("hidden");
          $('#response_status').addClass("highlight-red");
          $('#response_status').removeClass("highlight-green");
          $('#response_text').addClass("highlight-red");
          $('#response_text').removeClass("highlight-green");
          $('#response_status').html(response.status);
          $('#response_text').html(friendlyHttpStatus[response.status]);
          $('#post-response').html("");
        }
      }).then(function (json_response) {
        $('#post_response_data').html(JSON.stringify(json_response["data"]));
        $('#post_response_durations').html(JSON.stringify(json_response["durations"]));
        $('#post_response_avg_durations').html(JSON.stringify(json_response["avg_durations"]));

      })

      $('#post-button').html("POSTED!");
      setTimeout(() => { $('#post-button').html("POST"); }, 1500);
    }

    $(".demo-link").click(function () {
      let demo_num = $(this).attr("demo");
      $(".demo-link").removeClass("selected");
      $(this).addClass("selected");
      $(".demo-window").hide();
      $(`.demo-window[demo="${demo_num}"]`).show();
    })


    var friendlyHttpStatus = {
      '200': 'OK',
      '201': 'Created',
      '202': 'Accepted',
      '203': 'Non-Authoritative Information',
      '204': 'No Content',
      '205': 'Reset Content',
      '206': 'Partial Content',
      '300': 'Multiple Choices',
      '301': 'Moved Permanently',
      '302': 'Found',
      '303': 'See Other',
      '304': 'Not Modified',
      '305': 'Use Proxy',
      '306': 'Unused',
      '307': 'Temporary Redirect',
      '400': 'Bad Request',
      '401': 'Unauthorized',
      '402': 'Payment Required',
      '403': 'Forbidden',
      '404': 'Not Found',
      '405': 'Method Not Allowed',
      '406': 'Not Acceptable',
      '407': 'Proxy Authentication Required',
      '408': 'Request Timeout',
      '409': 'Conflict',
      '410': 'Gone',
      '411': 'Length Required',
      '412': 'Precondition Required',
      '413': 'Request Entry Too Large',
      '414': 'Request-URI Too Long',
      '415': 'Unsupported Media Type',
      '416': 'Requested Range Not Satisfiable',
      '417': 'Expectation Failed',
      '418': 'I\'m a teapot',
      '429': 'Too Many Requests',
      '500': 'Internal Server Error',
      '501': 'Not Implemented',
      '502': 'Bad Gateway',
      '503': 'Service Unavailable',
      '504': 'Gateway Timeout',
      '505': 'HTTP Version Not Supported',
    };

    var randomInput = {
      'str': 'gradio is so cool!',
      'Base64 str': 'data:image/jpeg;base64,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…