import { util } from '@aws-appsync/utils';

export function request(ctx) {
	return {
		operation: 'UpdateItem',
		key: util.dynamodb.toMapValues({ ID: ctx.args.ID }),
		update: {
			expression: 'SET #status :status',
			expressionNames: { '#status': 'status' },
			expressionValues: { ':status': { S: 'accessed' } },
		},
	};
}

export const response = (ctx) => ctx.result;
