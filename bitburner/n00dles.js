// i figured that since n00dles is constantly weak, it needed its own loop
// what it does need is a LOT of growing. might need to make a second vers for home
export async function main(ns) {
     while (true) {
          if (ns.getServerSecurityLevel("n00dles") >= 1.050) {
               await ns.weaken("n00dles");
          } else if(ns.getServerMoneyAvailable != 1750000) {
               await ns.grow("n00dles")
          } else {
               await ns.hack("n00dles")
          } await ns.sleep(500)
     }
}
