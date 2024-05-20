
var src_default = {
  async fetch(request, env, ctx) {
    if(request.method == "POST") {
           const workerResponseMap = {
            1: "Random Response 1",
            2: "Random Response 2",
            3: "Random Response 3",
            4: "Random Response 4",
            };

            function getRandomNumber(max) {
                return Math.floor(Math.random() * max);
            };

           return new Response(workerResponseMap[getRandomNumber(4)], {
               headers: {
                   'content-type': 'application/json',
               },
           });
       }
       else{
           return new Response('Error Worker! Wrong URL', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
  }
};
export {
  src_default as default
};
