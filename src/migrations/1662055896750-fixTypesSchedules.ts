import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypesSchedules1662055896750 implements MigrationInterface {
    name = 'fixTypesSchedules1662055896750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "user" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "user"`);
    }

}
