//main.c
#include <stdio.h>
int increment(int a);
void main(void)
{
    int a;
    scanf("%i", &a);
    a = increment(a);
    printf("%i \n", a);
    return;
}

//increment.c
int increment(int a)
{
    int b = a;
    b = b + 1;
    return b;
}

shell cmd::
 626  powershell
  627  cat main.c
  628  ls
  629  rm main.exe
  630  ls
  631  touch hello.c
  632  cat hello.c
  633  ls
  634  rm hello.c
  635  ls
  636  cc main.c -S
  637  ls
  638  cat main.c
  639  cc main.c  -o main
  640  ls
  641  cc main.c  -o main
  642  cat main.c
  643  cc main.c  -o main
  644  cc main.c -S
  645  ls
  646  history
  647  vi main.s
  648  cc main.s -c
  649  ls
  650  vi main.o
  651  hexdump main.o
  652  ./main.o
  653  chmod +x main.o
  654  ls
  655  ./main.o
  656  cc main.o -o main
  657  ls
  658  ./main
  659  cc main.c -S
  660  vi main.s
  661  cat main.c
  662  cc main.c -S
  663  vi main.s
  664  cc main.c -S
  665  vi main.s
  666  ls
  667  cc main.o -o main
  668  ./main
  669  cc main.o -o main
  670  ./main
  671  ls
  672  cat increment.c
  673  ls
  674  cat output
  675  rm output
  676  ls
  677  cat main.c
  678  cat increment.c
  679  ls
  680  cat main.c
  681  cat increment.c
  682  cc main.c -S
  683  cc increment.c -S
  684  ls
  685  cc main.s -c
  686  cc increment.s -c
  687  ls
  688  cc main.o increment.o -o main
  689  ls
  690  ./main
  691  cat increment.c
  692  ls
  693  ./increment
  694  cc main.o increment.o -o main
  695  ls
  696  hexdump increment.o
  697  hexdump main.o
  698  ls
  699  cat increment.s
  700  cat main.s
  701  cat main.o
  702  hexdump increment.o
  703  history

  714  powershell
  715  touch main.c
  716  code main.c
  717  run main.c
  718  runc
  719  cat main.c
  720  c hmain.c -o  main
  721  cc main.c -o  main
  722  ./main
  723  ls
  724  wsl
  725  ./main
  726  ls
  727  cc main.c -o main
  728  cat main.c
  729  ./main
  730  cc main.c -o  main
  731  ./main
  732  cc main.c -o  main
  733  ./main
  734  cc main.c -o  main
  735  ./main
  736  cc main.c -o  main
  737  ./main
  738  cc main.c -o  main
  739  ./main
  740  cc main.c -o  main
  741  ./main
  742  cc main.c -o  main
  743  ./main
  744  cc main.c -o  main
  745  ./main
  746  ls
  747  docker
  748  docker run
  749  docker -v
  750  run docker
  751  apt install docker
  752  apt install run
  753  apt install rn
  754  docker rn
  755  apt install docker
  756  sudo apt-get install docker
  757  sudo apt-get install --fix-missing docker
  758  n
  759  sudo apt-get install --fix-missing docker
  760  docker ps
  761  docker rn
  762  ls
  763  sudo apt-get install --fix-missing docker
  764  ps aux | grep apt
  765  sudo kill <process_id>
  766  ps aux | grep apt
  767  sudo kill <16507>
  768  sudo kill 16507
  769  sudo kill <process_id>
  770  sudo rm /var/lib/dpkg/lock-frontend
  771  sudo apt-get install --fix-missing docker
  772  sudo rm /var/lib/dpkg/lock
  773  sudo apt-get install --fix-missing docker
  774  sudo kill 16508
  775  sudo apt-get install --fix-missing docker
  776  sudo rm /var/cache/apt/archives/lock
  777  sudo apt-get install --fix-missing docker
  778  cc main.c -o main
  779  ls
  780  cc main.c -S
  781  ls
  782  docker -v
  783  docker --start-service
  784  docker rn
  785  docker -v
  786  apt install docker.io
  787  sudo apt update
  788* curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpgsudo apt install apt-transport-https ca-certificates curl software-properties-common
  789  sudo apt install apt-transport-https ca-certificates curl software-properties-common
  790  echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  791  sudo apt update
  792  docker ps
  793  docker pull redis
  794  docker ps
  795  docker images
  796  docker run -d redis
  797  docker ps
  798  pwd
  799  docker ps -a
  800  docker start fc36dcfd88dd
  801  docker ps
  802  docker run redis:4.0
  803  docker ps
  804* docker
  805  docker run -d redis
  806  docker ps
  807  docker run -d redis
  808  docker ps
  809  docker run redis:4.0
  810  docker ps
  811  docker stop 7ae45fae7d7f
  812  docker ps
  813  docker start 7ae45fae7d7f
  814  docker ps
  815  docker ps -a
  816  history
 837  docker ps
  838  docker stop redis
  839  docker run -p6000:6379 redis:4.0
  840  docker run -p6000:6379 redis
  841  docker run -p6000:6379 redis:4.0
  842  docker run -p6001:6379 redis:4.0
  843  docker run -p6000:6379 redis
  844  docker p
  845  docker ps
  846  docker ps -a
  847  docker run -p6000:6379 redis
  848  docker ps -a
  849  docker ps
  850  docker run -d -p6000:6379 redis
  851  docker run -d -p6001:6379 redis:4.0
  852  docker ps
  853  docker images
  854  clear
  855  docker ps
  856  docker logs competent_ardinghelli
  857  docker stop competent_ardinghelli
  858  docker run -d -p6001:6379 ==name redis-older redis:4.0
  859  docker run -d -p6001:6379 --name redis-older redis:4.0
  860  docker ps
  861  docker stop gallant_archimedes
  862  docker run -d -p6000:6379 --name redis-latest redis
  863  docker ps
  864  history
////////////////////////////////////////
781  ls
  782  docker -v
  783  docker --start-service
  784  docker rn
  785  docker -v
  786  apt install docker.io
  787  sudo apt update
  788* curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpgsudo apt install apt-transport-https ca-certificates curl software-properties-common
  789  sudo apt install apt-transport-https ca-certificates curl software-properties-common
  790  echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  791  sudo apt update
  792  docker ps
  793  docker pull redis
  794  docker ps
  795  docker images
  796  docker run -d redis
  797  docker ps
  798  pwd
  799  docker ps -a
  800  docker start fc36dcfd88dd
  801  docker ps
  802  docker run redis:4.0
  803  docker ps
  804* docker
  805  docker run -d redis
  806  docker ps
  807  docker run -d redis
  808  docker ps
  809  docker run redis:4.0
  810  docker ps
  811  docker stop 7ae45fae7d7f
  812  docker ps
  813  docker start 7ae45fae7d7f
  814  docker ps
  815  docker ps -a
  816  history
  817  docker ps -a
  818  docker ps
  819  docker run -p6000:6379
  820  docker run -p6000:6379 redis
  821  clear
  822  docker ps
  823  docker run posgres:9.6.5
  824  docker pull posgres:9.6.5
  825  docker pull posgres
  826  docker pull redis:4.0
  827  docker ps
  828  docker run redis:4.0
  829  docker run -d redis
  830  docker run -d redis:4.0
  831  docker ps -a
  832  docker ps
  833  docker run -d redis
  834  docker run -d redis:4.0
  835  docker ps
  836  clear
  837  docker ps
  838  docker stop redis
  839  docker run -p6000:6379 redis:4.0
  840  docker run -p6000:6379 redis
  841  docker run -p6000:6379 redis:4.0
  842  docker run -p6001:6379 redis:4.0
  843  docker run -p6000:6379 redis
  844  docker p
  845  docker ps
  846  docker ps -a
  847  docker run -p6000:6379 redis
  848  docker ps -a
  849  docker ps
  850  docker run -d -p6000:6379 redis
  851  docker run -d -p6001:6379 redis:4.0
  852  docker ps
  853  docker images
  854  clear
  855  docker ps
  856  docker logs competent_ardinghelli
  857  docker stop competent_ardinghelli
  858  docker run -d -p6001:6379 ==name redis-older redis:4.0
  859  docker run -d -p6001:6379 --name redis-older redis:4.0
  860  docker ps
  861  docker stop gallant_archimedes
  862  docker run -d -p6000:6379 --name redis-latest redis
  863  docker ps
  864* do
  865  docker logs-redis older
  866  docker ps
  867  docker logs redis-older
  868  docker exec -it redis-latest /bin/bash
  869  docker pull mongo
  870  docker pull mongo-express
  871  docker network ls
  872  docker network create mongo-network
  873  docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
  874  docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
  875  docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongo_db --net mongo-network mongo
  876  docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
  877  docker rm 0116e00f2f49baef95361eb1d23366e6999cf591d7dab3616794f26240d08a1b
  878  docker stop 0116e00f2f49baef95361eb1d23366e6999cf591d7dab3616794f26240d08a1b
  879  docker rm 0116e00f2f49baef95361eb1d23366e6999cf591d7dab3616794f26240d08a1b
  880  docker network create mongo-network
  881  docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
  882  docker logs e72d9c1598b90727ffd50a635f4ad4b243afcff50282f146978acba74c7e5e01
  883  docker run -d \
  884  docker logs e72d9c1598b90727ffd50a635f4ad4b243afcff50282f146978acba74c7e5e01
  885  docker run -d -p 8081:8081
  886  docker run -d -p 8081:8081
  887  docker run
  888  docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network \
  889  docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network
  890  docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express
  891  docker logs 496d2ac2bcc2cab7c4d4ae36aba8a7d0d2dec88f5fa70fb14dfbb349d54aa753
  892  docker ps
  893  docker logs
  894  docker logs 496d2ac2bcc2
  895  docker logs e72d9c1598b9
  896  clear
  897  docker logs e72d9c1598b9 | tail
  898  history