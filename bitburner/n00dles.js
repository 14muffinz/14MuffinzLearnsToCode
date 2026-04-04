// i figured that since n00dles is constantly weak, it needed its own loop
export async function main(ns) {
     while (true) {
          if (ns.getServerSecurityLevel("n00dles") >= 1.050) {
               await ns.weaken("n00dles");
          } else {
               await ns.hack("n00dles")
          } await ns.sleep(1000)
     }
}
// breaking news, local idiot forgot to delete "min" and ruined his entire code
