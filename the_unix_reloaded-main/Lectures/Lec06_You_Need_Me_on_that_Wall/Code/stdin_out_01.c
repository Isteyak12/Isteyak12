#include <fcntl.h>
#include <unistd.h>

#include <stdio.h>
#include <stdlib.h>
void main(void){

	//int fd1 = open(STDIN_FILENO, O_RDONLY);
	//if (fd1 == -1){
	//	printf("error in opening stdin device!");
	//}
	char buf[100];
	
	read(STDIN_FILENO, buf, 100);
	int x = atoi(buf);
	read(STDIN_FILENO, buf, 100);
	int y = atoi(buf);
	
	
	//int fd2 = open(STDOUT_FILENO, O_WRONLY);
	//if (fd2 == -1){
	//	printf("error in opening stdout device!");
	//}
	//printf("opening stdout with fd: %d\n", fd2);
	
	sprintf(buf, "%d\n", x + y);
	write(STDOUT_FILENO, buf, sizeof(int));
	
}