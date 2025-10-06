module.exports = (connection) => {
    return {
        consultaActividad: async (req, res) => {
            try {
                const [rows] = await connection.promise().query('SELECT * FROM actividad');

                res.status(200).json(rows);
            } catch (error) {
                console.error('Error:', error);
                res.status(500).json({ message: 'Error' });
            }
        }
    }
}
