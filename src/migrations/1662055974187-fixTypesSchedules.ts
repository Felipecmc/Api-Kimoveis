import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypesSchedules1662055974187 implements MigrationInterface {
    name = 'fixTypesSchedules1662055974187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "user" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "UQ_56496f79df4ee7ac6d676d97fb2" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_56496f79df4ee7ac6d676d97fb2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_56496f79df4ee7ac6d676d97fb2"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "UQ_56496f79df4ee7ac6d676d97fb2"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "useridId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "useridId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "useridId" TO "user"`);
    }

}
