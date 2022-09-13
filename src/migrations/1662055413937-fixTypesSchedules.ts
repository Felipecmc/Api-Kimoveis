import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypesSchedules1662055413937 implements MigrationInterface {
    name = 'fixTypesSchedules1662055413937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "time" TO "hour"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "hour" TO "time"`);
    }

}
