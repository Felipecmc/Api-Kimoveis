import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypesSchedules1662050815613 implements MigrationInterface {
    name = 'fixTypesSchedules1662050815613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "time" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "time" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" TIMESTAMP NOT NULL`);
    }

}
