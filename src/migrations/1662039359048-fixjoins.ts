import { MigrationInterface, QueryRunner } from "typeorm";

export class fixjoins1662039359048 implements MigrationInterface {
    name = 'fixjoins1662039359048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_a82b56d3d456c30b8c630cba0c6" UNIQUE ("categoryId")`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "UQ_6b07764ec82685efb66e5629845" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "UQ_3193709d61be5a23d570547c964" UNIQUE ("propertyId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "UQ_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "UQ_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressId"`);
    }

}
