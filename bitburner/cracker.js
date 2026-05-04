// this is going to be such an epic augmenting script once i get the backdoor function
export async function main(ns) {
     ns.run("loopertest.js")
     ns.run("caring.js", 50)
     for (const server of servers) {
          ns.nuke(server);
          ns.run(server + ".js")
     }
}

const servers = ["n00dles", "nectar-net", "hong-fang-tea", "harakiri-sushi", "zer0", "phantasy"]
